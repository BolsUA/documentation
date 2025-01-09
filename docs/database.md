---
sidebar_position: 4
---

# Database Documentation

This document describes the entities in the Scholarship Management System and their roles within the platform.Information about users is retrieved from Amazon Cognito for each service that requires user details.

## Scholarship
The `scholarship` table represents scholarship opportunities available in the system. These scholarships can have various types, slots, and statuses.

- `name`: The name of the scholarship.
- `description`: A longer description of the scholarship.
- `publisher_id`: A reference to the user who published or created the scholarship.
- `type`: Defines the type of scholarship (e.g., "Investigation").
- `spots`: Number of available spots for the scholarship.
- `jury`: The list of jury members responsible for evaluating applications.
- `status`: The current state of the scholarship, either "open" or "closed".
- `dead_line`: The deadline by which applications must be submitted.
- `created_at`: Timestamp of when the scholarship was created.
- `approved_at`: Timestamp of when the scholarship was approved.
- `results_at`: Timestamp of when the results for the scholarship will be available.
- `id`: Unique identifier for each scholarship.

## Grading
The `grading` table is used to store information about the evaluation of scholarship applications. Each record ties a specific user and scholarship to a grade.

- `application_id`: References the application that is being graded.
- `scholarship_id`: References the scholarship for which the application was submitted.
- `student_id`: References the student who submitted the application.
- `jury_id`: References the jury member who graded the application.
- `grade`: An float value representing the grade awarded.
- `reason`: A text field explaining the rationale behind the grade.
- `user_response`: Represents the user's response to the grade (e.g., "accepted", "declined").
- `id`: Unique identifier for each grading entry.

## Submission Completed
The `submission_completed` table stores information about the completion of submitted results of scholarships.

- `scholarship_id`: References the scholarship for which the results were submitted.

## ScholarshipJury
The `scholarship_jury` table stores the scholarships_id and jury amount.

- `scholarship_id`: References the scholarship.
- `juryamount`: The amount of jury members assigned to the scholarship.

## Application
The `application` table stores the records of users applying for scholarships. Each application is tied to a specific user and scholarship.

- `user_id`: References the user who submitted the application.
- `scholarship_id`: References the scholarship for which the user applied.
- `name`: Name of the application.
- `status`: Represents the state of the application (e.g., "graded", "declined").
- `created_at`: Timestamp of when the application was submitted.
- `id`: Unique identifier for each application.
- `user_response`: Represents the user's response to the application (e.g., "accepted", "rejected").
- `grade`: The grade assigned to the application.
- `reason`: The reason for the grade being rejected.
- `select`: Boolean value indicating whether the application was selected.

## Scientific Area
The `scientific_area` table categorizes scholarships based on academic disciplines.

- `scholarship_id`: References the scholarship associated with a specific scientific area.
- `name`: Defines the scientific area, such as "medicine", "psychology", etc.

## Jury Table
The `jury_table` links jurors to specific scholarships. Jurors are responsible for evaluating scholarship applications.

- `scholarship_id`: References the scholarship the juror is responsible for.
- `user_id`: References the juror assigned to evaluate the scholarship.

## Documents
The `documents` table stores files associated with various entities in the system (e.g., applications or scholarships).

- `scholarship_id` / `application_id`: Reference to the scholarship or application the document is associated with.
- `name`: Name of the document.
- `path`: File path where the document is stored.
- `template`: Boolean indicating whether the document is a template (for scholarships).
- `required`: Boolean indicating whether the document is required (for scholarships or applications).

## Edictal
The `edictal` table is related to the publication of formal notices regarding scholarships.

- `scholarship_id`: Reference to the scholarship the notice relates to.
- `name`: Name of the edictal document.
- `file_path`: Path where the edictal is stored.
- `publication_date`: Date when the edictal was published.

# Database Diagram

![Database Diagram](./../static/img/Database.png)