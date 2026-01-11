import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import Image from 'next/image';

const teamMembers = [
 
  {
    id: 1,
    name: 'Jane Banda',
    role: 'CEO',
    image: '/images/Team/ceo.jpg',
    description: 'The founder and director of Dekha Consultancy.',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    email: 'jane@example.com'
  },
  {
    id: 2,
    name: 'John Dekha',
    role: 'Director',
    image: '/images/Team/director.jpg',
    description: 'The mind behind Dekha consultancy best services.',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    email: 'johndekha@example.com'
  },
 
  {
    id: 3,
    name: 'Peter Banda',
    role: 'Accountant',
    image: '/images/Team/accountant.jpg',
    description: 'Empathetic researcher uncovering deep user insights.',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    email: 'vinbanda@example.com'
  },

   
  // {
  //   id: 4,
  //   name: 'Paul Msusa',
  //   role: 'ICT Director',
  //   image: '/images/Team/ict.jpg',
  //   description: 'Master mind behind dekha consultancy improved online presence.',
  //   linkedin: 'https://linkedin.com',
  //   twitter: 'https://twitter.com',
  //   email: 'paulmsusa@example.com'
  // }
];

interface TeamMemberProps {
  member: {
    id: number;
    name: string;
    role: string;
    image: string;
    description: string;
    linkedin: string;
    twitter: string;
    email: string;
  };
}

const TeamMember = ({ member }: TeamMemberProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 focus-within:ring-2 focus-within:ring-blue-500">
      <Image 
        src={member.image} 
        alt={`${member.name} - ${member.role}`} 
        className="w-full h-64 object-cover"
        height={400}
        width={400}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{member.role}</p>
        <p className="text-gray-700 mb-4">{member.description}</p>
        <div className="flex justify-center space-x-4">
          <a href={member.linkedin} className="text-lightblue/60 hover:text-lightblue transition-colors duration-300" aria-label={`${member.name}'s LinkedIn profile`}>
            <FaLinkedin size={24} />
          </a>
          <a href={member.twitter} className="text-lightblue/60 hover:text-lightblue transition-colors duration-300" aria-label={`${member.name}'s Twitter profile`}>
            <FaXTwitter size={24}/>
          </a>
          <a href={`mailto:${member.email}`} className="text-lightblue/60 hover:text-lightblue transition-colors duration-300" aria-label={`Email ${member.name}`}>
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

const TeamSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="team-heading">
      <div className="max-w-7xl mx-auto">
        <h2 id="team-heading" className="text-3xl font-extrabold text-gray-900 text-center mb-12">Meet <span className='text-lightblue'>Our</span> Team</h2>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;