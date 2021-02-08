# Migration `20210208162014-migration`

This migration has been generated by rafenasir at 2/8/2021, 5:20:14 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."ContactUs" (
"id" text   NOT NULL ,
"title" text   NOT NULL ,
"body" text   NOT NULL ,
"created" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"modified" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY ("id")
)

DROP TABLE "public"."Pages"
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20210208160825-migration..20210208162014-migration
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgres"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -17,18 +17,19 @@
   created DateTime    @default(now())
   modified DateTime    @default(now())
 }
-model Pages {
+
+ 
+model AboutUS {
   id    String  @id @default(uuid())
-  page_name String
   title String
   body String
   created DateTime    @default(now())
   modified DateTime    @default(now())
 }
-model AboutUS {
+model ContactUs {
   id    String  @id @default(uuid())
   title String
   body String
   created DateTime    @default(now())
```

