package de.cleaning_crm.cleaning_crm.csvimport;

public class FileUploadResponse {
    private String fileName;
    private String downloadUri;
    private long size;
    public String getFileName() {
        return fileName;
    }
    public void setFileName(String fileName) {
        this.fileName = fileName;
    }
    public Long getSize() {
        return size;
    }
    public void setSize(Long size) {
        this.size = size;
    }
    public String getDownloadUri() {
        return downloadUri;

    }
    public void setDownloadUri(String downloadUri) {
        this.downloadUri = downloadUri;
    }
}
