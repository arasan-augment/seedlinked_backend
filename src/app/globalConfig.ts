import { Injectable } from '@angular/core';

@Injectable()

export class GlobalConfig {
}
export const GlobalVariable = Object.freeze({
    BASE_API_URL: 'http://localhost/',
    BASE_FOLDER_URL: 'Projects/seedlinkedbackend/',
    PORT_NUMBER: '4200'
});