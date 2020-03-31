import axios from 'axios';

const SCHEDULE_TEMPLATE_DOWNLOAD_URL = "https://localhost:5001/File/Download?fileName=CodeCoverage_Integration.xlsx";

/// Define interfaces here

/// REST service for the file resource.
class FileService {
    downloadTemplateUrl():string {
        return SCHEDULE_TEMPLATE_DOWNLOAD_URL;
    }
}

export default FileService;