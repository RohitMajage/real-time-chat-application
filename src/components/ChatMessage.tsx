import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { MessageSquare } from 'lucide-react';

interface ChatMessageProps {
  content: string;
  userEmail: string;
  createdAt: string;
  isCurrentUser: boolean;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  content,
  userEmail,
  createdAt,
  isCurrentUser,
}) => {
  return (
    <div
      className={`flex ${
        isCurrentUser ? 'justify-end' : 'justify-start'
      } mb-4`}
    >
      <div
        className={`flex max-w-[70%] ${
          isCurrentUser ? 'flex-row-reverse' : 'flex-row'
        }`}
      >
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full ${
            isCurrentUser ? 'ml-2 bg-blue-500' : 'mr-2 bg-gray-400'
          }`}
        >
          <MessageSquare className="h-4 w-4 text-white" />
        </div>
        <div>
          <div
            className={`rounded-lg px-4 py-2 ${
              isCurrentUser
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-800'
            }`}
          >
            <p className="text-sm">{content}</p>
          </div>
          <div
            className={`mt-1 text-xs text-gray-500 ${
              isCurrentUser ? 'text-right' : 'text-left'
            }`}
          >
            {userEmail} • {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
          </div>
        </div>
      </div>
    </div>
  );
};