'use client';
import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { UiMarkdownProps } from './types';

const UiMarkdown: FC<UiMarkdownProps> = ({ markdown = '' }) => {
  return <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>;
};

export default UiMarkdown;
