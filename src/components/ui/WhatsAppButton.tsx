import { MessageCircle } from 'lucide-react';
import { getWhatsAppChatUrl } from '../../utils/whatsapp';

interface WhatsAppButtonProps {
  label?: string;
  className?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const variantClasses: Record<string, string> = {
  primary: 'bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg hover:shadow-xl',
  outline: 'border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white',
  ghost: 'text-[#25D366] hover:bg-[#25D366]/10',
};

const sizeClasses: Record<string, string> = {
  sm: 'text-xs px-3 py-2 gap-1.5',
  md: 'text-sm px-4 py-2.5 gap-2',
  lg: 'text-base px-6 py-3.5 gap-2.5',
};

export function WhatsAppButton({
  label = 'Chat on WhatsApp',
  className = '',
  variant = 'primary',
  size = 'md',
}: WhatsAppButtonProps) {
  return (
    <a
      href={getWhatsAppChatUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center font-body font-semibold rounded-xl transition-all duration-200 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      <MessageCircle size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />
      {label}
    </a>
  );
}
