CREATE TABLE "users" (
    "user_id" bigserial PRIMARY KEY,
    "phone" varchar NOT NULL,
    "email" varchar NOT NULL,
    "password" varchar NOT NULL,
    "salt" varchar NOT NULL,
    "user_type" varchar NOT NULL,
    "created_At" timestamptz NOT NULL DEFAULT (now())
    "updated_At" timestamptz NOT NULL DEFAULT (now())
);