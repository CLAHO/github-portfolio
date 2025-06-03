eimport React, { useEffect, useState } from 'react';

export default function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/CLAHO/repos')
      .then(res => res.json())
      .then(data => {
        // Sort by most recently updated
        const sorted = data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setRepos(sorted);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold">Andy Ho</h1>
          <p className="text-xl text-gray-600">Data Analyst</p>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p>
            Data Scientist with a PhD in Neuroscience and over a decade of experience applying
            computational methods to complex biological datasets. Skilled in Python, R, and
            machine learning for data-driven discovery in neuroscience and biomedical science.
            Passionate about translating research insights into real-world health applications.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid gap-4">
            {repos.map(repo => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white p-4 rounded shadow hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold">{repo.name}</h3>
                <p className="text-sm text-gray-600">{repo.description}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {repo.language} • Updated {new Date(repo.updated_at).toLocaleDateString()}
                </p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Links</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="https://github.com/CLAHO"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub: CLAHO
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/scla-ho/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                LinkedIn: scla-ho
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
