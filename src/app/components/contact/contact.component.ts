import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms'; // 1. استيراد NgForm
import emailjs from '@emailjs/browser';

interface ContactInfo {
  icon: string;
  title: string;
  value: string;
}

interface SocialLink {
  icon: string;
  url: string;
  name: string; 
  color: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'] // تأكد ان الملف ده موجود
})
export class ContactComponent {
  contactInfo: ContactInfo[] = [
    { icon: 'fa fa-phone', title: 'Call us on', value: '+020 110 013 3486' },
    { icon: 'fa fa-map-marker-alt', title: 'Office', value: 'Helwan Cairo' },
    { icon: 'fa fa-envelope', title: 'Email', value: 'ziadbobo78@gmail.com' },
    { icon: 'fa fa-globe', title: 'instagram', value: 'ziadelmohager54' },
  ];
socialLinks: SocialLink[] = [
    { icon: 'fab fa-github', url: 'https://github.com/ZiadMahmoudas', name: 'GitHub', color: '#333' },
    { icon: 'fab fa-tiktok', url: 'https://www.tiktok.com/@zeks724', name: 'TikTok', color: '#000000' },
    { icon: 'fab fa-instagram', url: 'https://instagram.com/ziadelmohager54', name: 'Instagram', color: '#E1306C' },
    { icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/ziad.elmohager', name: 'Facebook', color: '#1877F2' },
    { icon: 'fab fa-whatsapp', url: 'https://wa.me/201100133486', name: 'WhatsApp', color: '#25D366' },
  ];
  formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  isLoading = false;
  isSubmitted = false; // عشان نعرف ان اليوزر داس على الزرار
  showSuccessMessage = false; // عشان نظهر رسالة الشكر

  async onSubmit(form: NgForm) {
    this.isSubmitted = true;

    // 2. لو الفورم فيه مشاكل (خانات فاضية او ايميل غلط) نوقف هنا
    if (form.invalid) {
      return;
    }

    this.isLoading = true;

    const templateParams = {
      from_name: this.formData.name,
      from_email: this.formData.email,
      subject: this.formData.subject,
      message: this.formData.message,
      to_name: 'Ziad', 
    };

    try {
      // 3. بياناتك الحقيقية
      await emailjs.send(
        'service_m0a2viq',
        'template_6jm3o4z', 
        templateParams,
        'RHzdM-HKHUQmADFEJ'
      );

      // 4. نجاح الإرسال
      this.showSuccessMessage = true;
      
      // تصفير الفورم بالكامل (البيانات + حالة الايرور)
      form.resetForm(); 
      this.isSubmitted = false;

      // اخفاء رسالة الشكر بعد 4 ثواني
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 4000);

    } catch (error) {
      console.log('FAILED...', error);
      alert('Failed to send the message. Please try again.');
    } finally {
      this.isLoading = false;
    }
  }
}