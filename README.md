# Tenderboard Case Study Test

### Overview

Phonetic is a new startup company. They create and sell a revolutionary smartphone, a modular smartphone. Today, they have three series of phones. They are Jaguar, Leopard, and Lion. Phonetic ambition is to become the first leader in the smartphone industry. To achieve this, they are committed to providing the best after-sale experience in the world. They offer a one-day reparation service for all their smartphone lineups (it's possible because it's a modular phone). To make this happen, they hired Dalton and Wapol as technicians in their first service center at Long Ring Long Land Street.

Dalton and Wapol have outstanding repair phone skills. Wapol can fix a phone in 20 minutes on average time. On the other hand, Dalton can fix it in 10 minutes on average time (thanks to the modular system). Phonetic's first service center opens at 7 am and closes after they don't have any customers in the queue. The service center opens service registration at 7 am and closes at 9 am. After registration closes, they don't accept new customers on that day.

Dalton and Wapol started working at 9 am after registration closed. They will call customers by queue number. After finished repairing the phone, Dalton and Wapol will work on the next queue. So, customers don't know who will repair their phones.

1. Dalton and Wapol work simultaneously. So, if Dalton works for 1st customer in the queue, then Wapol works for 2nd customer in queue.
2. After Dalton/Wapol have finished, they will call the next available customer. They don't wait for each other to process the next customer.

## Service Center Simulation (TypeScript)

### How to Run

```bash
npm install -g typescript
npm run build
npm start
```
