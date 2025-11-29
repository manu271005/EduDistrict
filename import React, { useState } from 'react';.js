import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Clock, Loader2, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const TIME_SLOTS = [
  '9:00 AM - 10:00 AM',
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '2:00 PM - 3:00 PM',
  '3:00 PM - 4:00 PM',
  '4:00 PM - 5:00 PM'
];

export default function BookingModal({ open, onClose, school }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    parent_name: '',
    parent_email: '',
    parent_phone: '',
    preferred_date: '',
    preferred_time: TIME_SLOTS[0],
    notes: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const user = await base44.auth.me();
      
      await base44.entities.Booking.create({
        school_id: school.id,
        school_name: school.name,
        parent_name: formData.parent_name || user.full_name,
        parent_email: formData.parent_email || user.email,
        parent_phone: formData.parent_phone,
        preferred_date: formData.preferred_date,
        preferred_time: formData.preferred_time,
        notes: formData.notes,
        status: 'requested'
      });

      setSuccess(true);
      toast.success('Booking request sent successfully!');
      
      setTimeout(() => {
        onClose();
        setSuccess(false);
        setFormData({
          parent_name: '',
          parent_email: '',
          parent_phone: '',
          preferred_date: '',
          preferred_time: TIME_SLOTS[0],
          notes: ''
        });
      }, 2000);
    } catch (error) {
      toast.error(error.message || 'Failed to create booking');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="glass-card border-white/60 max-w-md max-h-[90vh] overflow-y-auto">
        {success ? (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="w-20 h-20 rounded-full accent-gradient flex items-center justify-center mb-4">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#06263B] mb-2">Request Sent!</h3>
            <p className="text-[#556170] text-center">
              The school will review your request and contact you soon.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-[#06263B]">
                Book Campus Visit
              </DialogTitle>
              <DialogDescription className="text-[#556170]">
                Schedule a visit to {school?.name}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <Label htmlFor="name" className="text-[#06263B] font-medium">
                  Your Name
                </Label>
                <Input
                  id="name"
                  value={formData.parent_name}
                  onChange={(e) => setFormData({ ...formData, parent_name: e.target.value })}
                  placeholder="Full name"
                  required
                  className="glass-card border-white/60 rounded-xl mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-[#06263B] font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.parent_email}
                  onChange={(e) => setFormData({ ...formData, parent_email: e.target.value })}
                  placeholder="your.email@example.com"
                  required
                  className="glass-card border-white/60 rounded-xl mt-2"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-[#06263B] font-medium">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.parent_phone}
                  onChange={(e) => setFormData({ ...formData, parent_phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  required
                  className="glass-card border-white/60 rounded-xl mt-2"
                />
              </div>

              <div>
                <Label htmlFor="date" className="text-[#06263B] font-medium flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Preferred Date
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.preferred_date}
                  onChange={(e) => setFormData({ ...formData, preferred_date: e.target.value })}
                  min={new Date().toISOString().split('T')[0]}
                  required
                  className="glass-card border-white/60 rounded-xl mt-2"
                />
              </div>

              <div>
                <Label htmlFor="time" className="text-[#06263B] font-medium flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Preferred Time
                </Label>
                <select
                  id="time"
                  value={formData.preferred_time}
                  onChange={(e) => setFormData({ ...formData, preferred_time: e.target.value })}
                  className="w-full glass-card border border-white/60 rounded-xl px-4 py-2 mt-2 text-[#06263B]"
                >
                  {TIME_SLOTS.map(slot => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>

              <div>
                <Label htmlFor="notes" className="text-[#06263B] font-medium">
                  Additional Notes (Optional)
                </Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Any specific questions or requirements..."
                  className="glass-card border-white/60 rounded-xl mt-2 min-h-[80px]"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  onClick={onClose}
                  variant="ghost"
                  className="flex-1 btn-ghost"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={loading}
                  className="flex-1 btn-primary"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Confirm Booking'
                  )}
                </Button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}