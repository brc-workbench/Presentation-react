import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import FileDownloadLink from '../FileDownloadLink';
import FileService from '../../../services/FileService';

describe("App Route Testing", () => {
  let wrapper: ShallowWrapper;
  let fileService: FileService;

  beforeEach(() => {
    wrapper = shallow(<FileDownloadLink />);
    fileService = new FileService();
  });
  
  test('Verify anchor tag link is to the correct URL', () => {
    const hrefSelector = '[href="' + fileService.downloadTemplateUrl() + '"]';
    expect(wrapper.find(hrefSelector).text()).toBeDefined();
  });
});
