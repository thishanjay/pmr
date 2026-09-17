This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## PHP API and Admin

The PHP files run on a PHP/MySQL server separately from the Next.js app. Set
`NEXT_PUBLIC_API_URL` to the public URL of the PHP `v1` directory, for example:

```env
NEXT_PUBLIC_API_URL=https://example.com/pmr-api/v1
```

Configure the PHP server with `PMR_DB_HOST`, `PMR_DB_NAME`, `PMR_DB_USER`, and
`PMR_DB_PASS`. Create the admin table and account before opening the admin page:

```sql
CREATE TABLE admins (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	username VARCHAR(255) NOT NULL UNIQUE,
	email VARCHAR(255) NOT NULL UNIQUE,
	password_hash VARCHAR(255) NOT NULL,
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO admins (username, email, password_hash)
VALUES (
	'pmradmin',
	'editor@mgt.pdn.ac.lk',
	'$2y$12$HMs/SI8/xrr6Tg6imj1FFe7ajHW7oBdhOZtqd.FnTCnC.z8AuIBqC'
)
ON DUPLICATE KEY UPDATE username = username;
```

Create the editorial table before opening the admin page:

```sql
CREATE TABLE editorial_board (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	role VARCHAR(255) NOT NULL DEFAULT '',
	email VARCHAR(255) NOT NULL,
	profile_link VARCHAR(2048) NOT NULL DEFAULT '',
	image_url VARCHAR(2048) NOT NULL DEFAULT '',
	category ENUM('co_editor', 'managing_editor', 'board_member') NOT NULL,
	display_order INT NOT NULL DEFAULT 0,
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```

Assuming the PHP project is served as `/pmr-api`, use `/pmr-api/v1/editorial.php`
for public editorial data and `/pmr-api/admin/dashboard.php` for the admin UI.
PDF uploads use `POST /pmr-api/admin/upload-pdf.php` with a multipart form field
named `pdf`. Files are stored in `api/uploads/pdfs`, returned below
`/pmr-api/uploads/pdfs`, and limited to 10 MB. The PHP process needs write
permission for that directory.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
