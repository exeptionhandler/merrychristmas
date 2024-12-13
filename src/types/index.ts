export interface CardTemplate {
  id: string;
  name: string;
  background: string;
  defaultMessage: string;
}

export interface Recipient {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

export interface GreetingCard {
  id: string;
  templateId: string;
  message: string;
  customImage?: string;
  font: string;
  color: string;
  recipients: Recipient[];
  scheduledDate?: Date;
  music?: string;
  isDraft: boolean;
}