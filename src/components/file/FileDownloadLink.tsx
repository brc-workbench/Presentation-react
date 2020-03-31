import React, { Component } from 'react';
import FileService from '../../services/FileService';

const FileDownloadLink: React.FC<{}> = () => {
  const service = new FileService();

  return (
    <a href={service.downloadTemplateUrl()}>
      Download Schedule Template 
    </a>
  );
};

export default FileDownloadLink;