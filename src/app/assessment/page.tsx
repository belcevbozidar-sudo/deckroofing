import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AssessmentForm from './components/AssessmentForm';

export default function AssessmentPage() {
  return (
    <main className="min-h-screen bg-charcoal overflow-x-hidden">
      <Header />
      <AssessmentForm />
      <Footer />
    </main>
  );
}