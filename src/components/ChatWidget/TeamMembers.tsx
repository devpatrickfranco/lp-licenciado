import React from 'react';
import { TeamMember } from './types';

interface TeamMembersProps {
  members: TeamMember[];
}

const TeamMembers: React.FC<TeamMembersProps> = ({ members }) => {
  return (
    <div className="mb-6 p-4 bg-gradient-to-r from-gray-50 to-pink-50 rounded-xl border border-gray-100">
      <p className="text-sm text-gray-700 mb-3 font-medium">
        Nossos atendentes estão prontos para te ajudar:
      </p>
      <div className="flex space-x-3">
        {members.map((member) => (
          <div key={member.id} className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-100 to-pink-200 border-2 border-pink-500 flex items-center justify-center shadow-sm">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-10 h-10 rounded-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div
                className={`w-6 h-6 text-pink-600 font-bold text-sm items-center justify-center ${
                  member.avatar ? 'hidden' : 'flex'
                }`}
              >
                {member.name.charAt(0)}
              </div>
            </div>
            <span className="text-xs text-gray-600 mt-1 text-center">
              {member.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;