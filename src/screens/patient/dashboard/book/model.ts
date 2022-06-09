export type Tab = {
  title: string;
  label: string;
};

export const tabs: Tab[] = [
  {
    title: 'PRIMARY CARE',
    label: 'primaryCare',
  },
  {
    title: "WOMEN'S",
    label: 'womensCare',
  },
  {
    title: 'MENTAL',
    label: 'mentalHealth',
  },
];

export const sections = [
  {
    title: 'Payment & Insurance',
    sections: [
      'If you are sponsored by a school or organization your available credits will be applied.',
      'If you are out of credits, any additional costs will be paid out of pocket.',
      'If you are covered by your insurance you will be asked to pay cash upfront but can submit the receipt to your insurance for reimbursement.',
    ],
  },
  {
    title: 'Cancellation',
    sections: [
      'If you need to cancel or reschedule your appontment, you will need to do so at least 24 hours in advance.',
    ],
  },
];
