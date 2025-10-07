import React, { useState } from 'react';
import { WagmiConfig } from 'wagmi';
import { ReownProvider, useReown } from '@reown/appkit';
import { wagmiConfig } from '../lib/wagmi';
import ProposalCard from '../components/ProposalCard';
import TaskList from '../components/TaskList';
import { Proposal, Task } from '../types';

const mockProposals: Proposal[] = [
  {
    id: '1',
    title: 'Add new DAO feature',
    description: 'Proposal to add voting transparency UI',
    createdAt: new Date().toISOString(),
    votesFor: 10,
    votesAgainst: 2,
    creator: '0x123...abc'
  }
];

const mockTasks: Task[] = [
  { id: 't1', title: 'Design UI', description: 'Create mockups', completed: false, assignee: '0xabc' },
  { id: 't2', title: 'Deploy contract', description: 'Deploy DAO contract', completed: true, assignee: '0xdef' }
];

const Home: React.FC = () => {
  const { connect, disconnect, account } = useReown();
  const [proposals] = useState<Proposal[]>(mockProposals);
  const [tasks] = useState<Task[]>(mockTasks);

  return (
    <WagmiConfig config={wagmiConfig}>
      <ReownProvider projectId="180a7164cfa9e5388daf1160841f65a0">
        <div className="p-6 max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">DAO Workspace</h1>

          {account ? (
            <div className="mb-6">
              <p>Connected: {account.address}</p>
              <button onClick={disconnect} className="bg-red-500 text-white px-4 py-2 rounded">Disconnect</button>
            </div>
          ) : (
            <button onClick={connect} className="bg-blue-500 text-white px-4 py-2 rounded mb-6">Connect Wallet</button>
          )}

          <h2 className="text-xl font-semibold mb-2">Proposals</h2>
          {proposals.map((p) => <ProposalCard key={p.id} proposal={p} />)}

          <h2 className="text-xl font-semibold mt-6 mb-2">Tasks</h2>
          <TaskList tasks={tasks} />
        </div>
      </ReownProvider>
    </WagmiConfig>
  );
};

export default Home;
