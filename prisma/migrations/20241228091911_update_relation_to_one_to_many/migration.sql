-- DropIndex
DROP INDEX "Transaction_enquiryId_key";

-- CreateIndex
CREATE INDEX "Enquiry_email_idx" ON "Enquiry"("email");

-- CreateIndex
CREATE INDEX "Enquiry_courseId_slotId_idx" ON "Enquiry"("courseId", "slotId");
