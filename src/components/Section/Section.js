import React from 'react';
import ContentRow from '../ContentRow/ContentRow';
import DisplayRow from '../DisplayRow/DisplayRow';

const Section = ({ title, j, g, children }) => {
  return (
    <ContentRow>
      <DisplayRow title={title} j={j} g={g}>
        {children}
      </DisplayRow>
    </ContentRow>
  );
};

export default Section;
