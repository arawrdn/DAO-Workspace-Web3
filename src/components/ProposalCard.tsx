import React from 'react';
import { Proposal } from '../types';

interface Props {
  proposal: Proposal;
}

const ProposalCard: React.FC<Props> = ({ proposal }) => {
  return (
    <div className="border p-4 rounded-md shadow-sm mb-4">
      <h2 className="text-lg font-bold">{proposal.title}</h2>
      <p>{proposal.description}</p>
      <p className="text-sm text-gray-500">
        Created by: {proposal.creator} | Votes: {proposal.votesFor}-{proposal.votesAgainst}
      </p>
    </div>
  );
};

export default ProposalCard;
