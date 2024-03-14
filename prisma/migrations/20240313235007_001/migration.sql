-- CreateTable
CREATE TABLE "User" (
    "id" STRING NOT NULL,
    "email" STRING NOT NULL,
    "passwordHash" STRING,
    "loginAttempts" INT4 NOT NULL DEFAULT 0,
    "lastLoginAttempt" TIMESTAMP(3),
    "themePreference" STRING DEFAULT 'light',
    "profileAvatar" STRING,
    "selectedDate" STRING,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MacroTargets" (
    "id" STRING NOT NULL,
    "userId" STRING,
    "calories" FLOAT8,
    "protein" FLOAT8,
    "carbs" FLOAT8,
    "fats" FLOAT8,

    CONSTRAINT "MacroTargets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FoodLog" (
    "id" STRING NOT NULL,
    "userId" STRING,
    "calories" FLOAT8,
    "carbs" FLOAT8,
    "category" STRING,
    "categoryLabel" STRING,
    "fats" FLOAT8,
    "foodId" STRING,
    "image" STRING,
    "knownAs" STRING,
    "label" STRING,
    "CHOCDF" FLOAT8,
    "ENERC_KCAL" FLOAT8,
    "FAT" FLOAT8,
    "FIBTG" FLOAT8,
    "PROCNT" FLOAT8,
    "protein" FLOAT8,
    "quantity" INT4,
    "servingSizes" JSONB,
    "nutrients" JSONB,

    CONSTRAINT "FoodLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubmittedFoodLog" (
    "id" STRING NOT NULL,
    "foodLog" JSONB NOT NULL,
    "foodLogId" STRING NOT NULL,
    "selectedDate" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" STRING,

    CONSTRAINT "SubmittedFoodLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "MacroTargets_userId_key" ON "MacroTargets"("userId");

-- CreateIndex
CREATE INDEX "MacroTargets_userId_index" ON "MacroTargets"("userId");

-- CreateIndex
CREATE INDEX "userId_index" ON "FoodLog"("userId");

-- CreateIndex
CREATE INDEX "submitted_food_logs_user_id_index" ON "SubmittedFoodLog"("userId");

-- AddForeignKey
ALTER TABLE "MacroTargets" ADD CONSTRAINT "MacroTargets_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodLog" ADD CONSTRAINT "FoodLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubmittedFoodLog" ADD CONSTRAINT "SubmittedFoodLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
