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
    // Add your Issue 2 papers here...
    { 
        title: "Example Title for Issue 2", 
        author: "Author Name", 
        link: "/pdfs/v1-i2/article01.pdf" 
    },
  ],
};