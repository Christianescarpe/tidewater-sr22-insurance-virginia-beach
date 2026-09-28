"use client";

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, Search } from 'lucide-react';
import { COMPANY_INFO } from '@/data/site-data';
import PhoneCTA from './PhoneCTA';

export interface FaqItem {
  question: string;
  answerHtml: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = items.filter(item =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answerHtml.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative max-w-xl mx-auto mb-8">
        <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search SR-22 questions (e.g., cost, non-owner, timeline, lapse)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-xl border border-sand-400 focus:outline-none focus:ring-2 focus:ring-forest-800 bg-white text-gray-800 shadow-sm text-sm"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600"
          >
            Clear
          </button>
        )}
      </div>

      {filteredItems.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-2xl border border-sand-300 p-8">
          <p className="text-gray-600 mb-4">No matching questions found for &quot;{searchQuery}&quot;.</p>
          <p className="text-sm text-gray-500 mb-6">Call our specialists directly to get your question answered right away:</p>
          <PhoneCTA size="md" variant="primary" />
        </div>
      ) : (
        <div className="space-y-4">
          {filteredItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-sand-300 overflow-hidden shadow-sm transition-all duration-200 hover:border-sand-400"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bold text-base md:text-lg text-forest-800">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-sand-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-forest-800 text-white' : 'text-forest-800'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-gray-700 text-base leading-relaxed border-t border-sand-200">
                    <div
                      className="prose-custom prose-sm max-w-none"
                      dangerouslySetInnerHTML={{ __html: item.answerHtml }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Immediate Phone Consultation Box */}
      <div className="mt-12 p-8 rounded-2xl bg-forest-800 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-xl font-bold text-sand-100">Still Have Questions About Your Situation?</h3>
          <p className="text-sand-300 text-sm max-w-xl">
            We&apos;d rather you ask than guess. Visit us at 513 19th St ste 110, Virginia Beach, VA 23451, United States or call any time for a clear, honest answer.
          </p>
        </div>
        <div className="shrink-0">
          <PhoneCTA size="lg" variant="primary" />
        </div>
      </div>
    </div>
  );
}
