import Link from 'next/link';

export default function PublicationCard({ publication }) {
  const {
    title,
    authors = [],
    journal,
    image,
    conference,
    year,
    volume,
    pages,
    impact_factor,
    citescore,
    quartile,
    publisher,
    location,
    doi,
    pdf,
    link,
    abstract,
    isbn
  } = publication;

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow gap-4">
      {/* Image on the left */}
      {image && (
        <div className="w-full md:w-[150px] h-[200px] flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain rounded-md"
          />
        </div>
      )}

      {/* Content on the right */}
      <div className="flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>

          {authors.length > 0 && (
  <p className="text-gray-600 mt-1">
    {authors.map((author, index) => {
      const normalized = author.replace(/\s/g, '');
      const isTarget = normalized === 'A.Yadav';
      return (
        <span key={index}>
          <span className={isTarget ? 'text-black-700 font-semibold' : ''}>
            {author}
          </span>
          {index < authors.length - 1 && ', '}
        </span>
      );
    })}
  </p>
)}


          <p className="text-sm text-gray-500 mt-2">
            
            {volume && <span>Volume {volume}, </span>}
            {pages && <span>{pages}, </span>}
            {journal && <span>{journal}</span>}
            {conference && <span>{conference}</span>}
            {year && <span> • {year}</span>}
          </p>

          {publisher && (
            <p className="text-sm text-gray-500">Publisher: {publisher}</p>
          )}

{citescore && (
  <p className="text-sm text-gray-500">
    CiteScore: {citescore} {quartile ? `(${quartile})` : ''}
  </p>
)}

          {impact_factor && (
            <p className="text-sm text-gray-500">Impact Factor: {impact_factor}</p>
          )}

          {isbn && (
            <p className="text-sm text-gray-500">ISBN: {isbn}</p>
          )}

          {location && (
            <p className="text-sm text-gray-500">Location: {location}</p>
          )}

          {doi && (
            <p className="text-sm text-blue-600 mt-2 break-all">DOI: {doi}</p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex space-x-2 mt-4">
          {pdf && (
            <Link
              href={pdf}
              target="_blank"
              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-md text-sm hover:bg-blue-100 transition-colors"
            >
              PDF
            </Link>
          )}
          {link && (
            <Link
              href={link}
              target="_blank"
              className="px-3 py-1 bg-gray-50 text-gray-600 rounded-md text-sm hover:bg-gray-100 transition-colors"
            >
              View
            </Link>
          )}
        </div>

        {/* Abstract */}
        {abstract && (
          <div className="mt-4">
            <p className="text-sm text-gray-700 line-clamp-3">{abstract}</p>
          </div>
        )}
      </div>
    </div>
  );
}
