# Teachers App Architecture

## Database Schema (NoSQL - Firebase Firestore)

The application uses a document-oriented database structure optimized for the "Teachers App" requirements.

### Collections

#### 1. `users` (Teachers/Admin)

Stores profile information for the institute or individual teacher.

```json
{
  "uid": "string (Auth ID)",
  "name": "string",
  "instituteName": "string",
  "email": "string",
  "phone": "string",
  "subscriptionPlan": "trial | standard | combo",
  "subscriptionExpiry": "timestamp",
  "smsCredits": "number",
  "createdAt": "timestamp"
}
```

#### 2. `batches` (Classes)

Represents a group of students (e.g., "Class 10 - Math").

```json
{
  "id": "string",
  "userId": "string (Ref: users)",
  "name": "string",
  "subject": "string",
  "schedule": "string (e.g., 'Mon, Wed, Fri 10am')",
  "createdAt": "timestamp"
}
```

#### 3. `students`

Students enrolled in a specific batch.

```json
{
  "id": "string",
  "batchId": "string (Ref: batches)",
  "name": "string",
  "rollNo": "string",
  "phone": "string (Student)",
  "parentPhone": "string (Parent - for SMS)",
  "joinedAt": "timestamp"
}
```

#### 4. `attendance_logs`

Daily attendance records for a batch.

```json
{
  "id": "string",
  "batchId": "string",
  "date": "string (YYYY-MM-DD)",
  "timestamp": "timestamp",
  "stats": {
    "present": "number",
    "absent": "number"
  },
  "records": {
    "studentId_1": "present",
    "studentId_2": "absent",
    "studentId_3": "leave"
  }
}
```

#### 5. `fee_records`

Tracks payments and dues.

```json
{
  "id": "string",
  "studentId": "string",
  "batchId": "string",
  "amount": "number",
  "paymentDate": "timestamp",
  "type": "Tuition | Exam | Registration",
  "remarks": "string",
  "receiptNumber": "string"
}
```

#### 6. `exams`

Test definitions.

```json
{
  "id": "string",
  "batchId": "string",
  "title": "string",
  "maxMarks": "number",
  "date": "timestamp"
}
```

#### 7. `exam_results`

Scores for students.

```json
{
  "examId": "string",
  "studentId": "string",
  "marksObtained": "number",
  "percentage": "number",
  "status": "Pass | Fail"
}
```

---

## SMS API Structure

The application requires a robust SMS system for attendance, marks, and marketing.

### Endpoint: `POST /api/sms/send`

**Request Body:**

```typescript
interface SendSMSRequest {
  type: "attendance" | "marks" | "marketing" | "fee_reminder";
  recipients: string[]; // Array of phone numbers (+91...)
  message: string; // The content
  templateId?: string; // DLT Template ID (Indian regulation)
  scheduleTime?: string; // ISO string for scheduled SMS
}
```

**Response:**

```json
{
  "success": true,
  "messageId": "msg_12345",
  "creditsRemaining": 4500
}
```

### Implementation Logic (Pseudo-code)

1.  **Validate Request**: Check if user has enough `smsCredits`.
2.  **Filter DND**: Check if numbers are valid.
3.  **Operator Gateway**: Send request to SMS Gateway Provider (e.g., MSG91, Twilio, or local Indian provider).
4.  **Log Transaction**: Save record to `sms_logs` collection.
5.  **Deduct Credits**: Atomic decrement of user's credit balance.

### Webhook: `POST /api/sms/callback`

Receives delivery reports (Delivered, Failed, DND) from the provider to update status in `sms_logs`.
