'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

interface FormData {
  serialNumber: string;
  customerName: string;
  phoneNumber: string;
  purchaseDate: string;
  purchasePlace: string;
}

interface FormErrors {
  serialNumber?: string;
  customerName?: string;
  phoneNumber?: string;
  purchaseDate?: string;
  purchasePlace?: string;
}

export default function RegisterPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    serialNumber: '',
    customerName: '',
    phoneNumber: '',
    purchaseDate: '',
    purchasePlace: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  // 전화번호 자동 포맷팅
  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/[^\d]/g, '');
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 7) return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    if (field === 'phoneNumber') {
      value = formatPhoneNumber(value);
    }
    setFormData((prev) => ({ ...prev, [field]: value }));
    // 에러 초기화
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.serialNumber.trim()) {
      newErrors.serialNumber = '시리얼 번호를 입력해주세요';
    }

    if (!formData.customerName.trim()) {
      newErrors.customerName = '성함을 입력해주세요';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = '전화번호를 입력해주세요';
    } else {
      const phoneNumbers = formData.phoneNumber.replace(/[^\d]/g, '');
      if (phoneNumbers.length < 10 || phoneNumbers.length > 11) {
        newErrors.phoneNumber = '올바른 전화번호를 입력해주세요';
      }
    }

    if (!formData.purchaseDate) {
      newErrors.purchaseDate = '구매일을 선택해주세요';
    }

    if (!formData.purchasePlace.trim()) {
      newErrors.purchasePlace = '구매처를 입력해주세요';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push('/success');
      } else {
        alert('등록 중 오류가 발생했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('등록 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-ivory to-white">
      {/* 헤더 */}
      <header className="w-full px-6 py-6 border-b border-brand-gray-200">
        <div className="max-w-md mx-auto">
          <button
            onClick={() => router.back()}
            className="text-body-lg text-brand-gray-600 mb-4"
          >
            ← 뒤로
          </button>
          <h1 className="font-serif text-title text-brand-dark">
            제품 등록
          </h1>
          <p className="text-body text-brand-gray-600 mt-2">
            Step 1/1
          </p>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="max-w-md mx-auto px-6 py-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 시리얼 번호 */}
          <Input
            label="시리얼 번호"
            type="text"
            value={formData.serialNumber}
            onChange={(e) => handleChange('serialNumber', e.target.value)}
            placeholder="제품 뒷면의 시리얼 번호를 입력하세요"
            error={errors.serialNumber}
            required
          />

          {/* 고객 성함 */}
          <Input
            label="고객 성함"
            type="text"
            value={formData.customerName}
            onChange={(e) => handleChange('customerName', e.target.value)}
            placeholder="성함을 입력하세요"
            error={errors.customerName}
            required
          />

          {/* 전화번호 */}
          <Input
            label="전화번호"
            type="tel"
            value={formData.phoneNumber}
            onChange={(e) => handleChange('phoneNumber', e.target.value)}
            placeholder="010-0000-0000"
            maxLength={13}
            error={errors.phoneNumber}
            required
          />

          {/* 구매일 */}
          <div className="w-full">
            <label className="block text-body-lg font-medium text-brand-dark mb-2">
              구매일
            </label>
            <input
              type="date"
              value={formData.purchaseDate}
              onChange={(e) => handleChange('purchaseDate', e.target.value)}
              className={`input-field ${errors.purchaseDate ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
              required
            />
            {errors.purchaseDate && (
              <p className="mt-2 text-body-sm text-red-600">{errors.purchaseDate}</p>
            )}
          </div>

          {/* 구매처 */}
          <Input
            label="구매처"
            type="text"
            value={formData.purchasePlace}
            onChange={(e) => handleChange('purchasePlace', e.target.value)}
            placeholder="구매하신 매장명을 입력하세요"
            error={errors.purchasePlace}
            required
          />

          {/* 제출 버튼 */}
          <div className="pt-8 pb-4">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
              className="w-full text-xl font-semibold"
            >
              {isSubmitting ? '등록 중...' : '등록 완료'}
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}

