export interface Paper {
  title: string;
  author: string;
  link: string;
}

export interface PapersDatabase {
  [key: string]: Paper[];
}

export const papersData: PapersDatabase = {
  "v1-i1": [
    {
      title: "Ownership Structure and Dividend per Share of Listed Manufacturing Companies in Sri Lanka",
      author: "S. Jeyan Suganya and Lingesiya Kengatharan",
      link: "/pdfs/v1-i1/article01.pdf"
    },
    {
      title: "Exploring the Challenges in Transitioning from Traditional Project Management to Agile Project Management",
      author: "H. D. M. M. Pussella, A.M.A.S.M.Bandara",
      link: "/pdfs/v1-i1/article02.pdf"
    },
    {
      title: "Effectiveness of Audit Committees: Evidence from Listed Companies in Sri Lanka",
      author: "P. T. M. Gunathilake, M.Ranasinghe",
      link: "/pdfs/v1-i1/article03.pdf"
    },
    {
      title: "User Preference for Information Contained in the Environment Reporting in Sri Lanka",
      author: "D. M. M. B. Dissanayake, E. M. A. S. B. Ekanayake",
      link: "/pdfs/v1-i1/article04.pdf"
    },
  ],
  "v1-i2": [
    {
      title: "Modelling a Marketing-based Solution for the Paddy Marketing Crisis in Sri Lanka: Case of the Upuldeniya Warehouse Storage",
      author: "R.P.I.R. Prasanna",
      link: "/pdfs/v1-i2/1.pdf"
    },
    {
      title: "The Effect of Green Practices on Tourists’ Behavioral Intention: A Study of Hoteliers in Central Province of Sri Lanka",
      author: "R.S.S.W. Arachchi",
      link: "/pdfs/v1-i2/2.pdf"
    },
    {
      title: "Stakeholder Orientation for Social Value Creation: A Case Study",
      author: "B.A.N. Eranda, B.A.I.R. Sumanarathna",
      link: "/pdfs/v1-i2/3.pdf"
    },
    {
      title: "Exploring Entrepreneurial Capabilities for International Entrepreneurship: A Study of International Entrepreneurship Sense-making Narratives in Sri Lanka",
      author: "N. D. L. De Silva, D. M. Mudalige",
      link: "/pdfs/v1-i2/4.pdf"
    },
  ],
  "v2-i1": [
    {
      title: "The Role of Positive Framing in the Relationship between Career Commitment and Career Success",
      author: "R. James",
      link: "/pdfs/v2-i1/1.pdf"
    },
    {
      title: "Time Orientation & Sequential Coherence as Novel Determinants of Open Innovation Performance",
      author: "S.R. Yapa, R. Senathiraja, J. Poesche & I. Kauranen",
      link: "/pdfs/v2-i1/2.pdf"
    },
    {
      title: "Organizational Culture & Competitive Advantage in ICT Industry in Sri Lanka",
      author: "T.S.S. Fernando & G.A.T.R. Perera",
      link: "/pdfs/v2-i1/3.pdf"
    },
    {
      title: "Determinants of Capital Structure;A Study of Listed Banks in Colombo Stock Exchange in Sri Lanka",
      author: "N.L.M. Abeysekara",
      link: "/pdfs/v2-i1/4.pdf"
    },
    {
      title: "Impact of Total Quality Management on Operational Performance",
      author: "	B.T.D.N. Senarath, G.C.I. Gunarathne, T.S.S.Fernando",
      link: "/pdfs/v2-i1/5.pdf"
    },
    {
      title: "Consumers’ Willingness to Choose a National Payment Card: A Stated Preference Approach",
      author: "U. Attanayake & P. Neelawala",
      link: "/pdfs/v2-i1/6.pdf"
    },
  ],
};