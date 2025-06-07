import Image from 'next/image';

export default function PastMemberCard({ member }) {
  const isIntern = member.degree === 'Intern';

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row gap-4">
        {member.photo && (
          <div className="relative w-full h-60 sm:w-40 sm:h-60 flex-shrink-0 overflow-hidden border border-gray-200 rounded">
            <Image
              src={member.photo}
              alt={`Photo of ${member.name}`}
              fill
              sizes="(max-width: 640px) 100vw, 160px"
              className="object-contain sm:object-cover object-top"
            />
          </div>
        )}
        <div>
          <h3 className="text-lg font-semibold">{member.name}</h3>
          <p className="text-gray-600 text-sm">{member.degree} Alumni</p>

          <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
            <div>
              <span className="font-medium">Duration:</span>
              <p>{member.duration}</p>
            </div>

            {!isIntern && (
              <div>
                <span className="font-medium">Current affiliation:</span>
                <p>{member.currentStatus}</p>
              </div>
            )}

            <div className="col-span-2">
              <span className="font-medium">
                {isIntern ? 'Title of Project:' : 'Research:'}
              </span>
              <p className="text-gray-700">{member.topic}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
