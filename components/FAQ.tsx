"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
}

export default function FAQ({ faqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <article
          key={faq.question}
          className="rounded-2xl border border-primary/10 bg-white/95 shadow-sm shadow-primary/5 transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
        >
          <button
            type="button"
            onClick={() => toggle(index)}
            aria-expanded={openIndex === index}
            className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-base font-semibold text-foreground/90 transition-colors hover:text-primary"
          >
            <span>{faq.question}</span>
            <ChevronDown
              className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 ${
                openIndex === index ? "rotate-180 text-primary" : "text-muted-foreground"
              }`}
              aria-hidden="true"
            />
          </button>
          {openIndex === index && (
            <div className="border-t border-primary/10 px-4 pb-5 pt-3 text-sm leading-relaxed text-muted-foreground">
              {faq.answer}
            </div>
          )}
        </article>
      ))}
    </div>
  );
}
