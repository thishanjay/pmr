export default function Footer() {
  return (
    <footer className="bg-red-900 text-white mt-12">
      <div className="max-w-6xl mx-auto px-8 py-12 grid md:grid-cols-3 gap-8">
        {/* Column 1: Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            <li>
              <a href="/downloads" className="hover:underline">
                All Issues
              </a>
            </li>
            <li>
              <a href="https://mgt.pdn.ac.lk/" className="hover:underline">
                FOM Website
              </a>
            </li>
            <li>
              <a
                href="https://www.pdn.ac.lk/journals/"
                className="hover:underline"
              >
                UOP Journals
              </a>
            </li>
            <li>
              <a
                href="/author-guidlines/Guidelines for Authors.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Author Guidelines
              </a>
            </li>
            <li>
              <a href="/editorial-board" className="hover:underline">
                Editorial Board
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2: Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact</h3>
          <p className="text-gray-200 mb-2">
            Co-editor, Peradeniya Management Review
          </p>
          <p className="text-gray-200 mb-2">
            Faculty of Management, University of Peradeniya
          </p>
          <p className="text-gray-200 mb-2">Peradeniya 20400, Sri Lanka</p>
          <p className="text-gray-200 mb-1">Call: 081-2385707</p>
          <p className="text-gray-200">
            Email:{" "}
            <a href="mailto:pmr@mgt.pdn.ac.lk" className="hover:underline">
              pmr@mgt.pdn.ac.lk
            </a>
          </p>
        </div>

        {/* Column 3: Google Map (Optional) */}
        <div className="md:col-span-1">
          <h3 className="font-bold text-lg mb-4">Faculty Location</h3>
          <div className="w-full h-48">
            <iframe
              title="Faculty of Management Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.6244724593253!2d80.59804527544877!3d7.252994594642637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae374e7269ed7d7%3A0xf5c5b053b49d2a6c!2sFaculty%20of%20Management%2C%20University%20of%20Peradeniya!5e0!3m2!1sen!2slk!4v1699768894032!5m2!1sen!2slk"
              width="100%"
              height="100%"
              className="border-0 rounded"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-red-800 text-gray-200 text-center py-4 mt-6">
        <p>
          Developed by IT Center, Faculty of Management, University of
          Peradeniya
        </p>
        <p>
          © {new Date().getFullYear()} Peradeniya Management Review. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
