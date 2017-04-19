import {Injectable} from '@angular/core';
import {FRAMES} from './mock-frames';

@Injectable()
export class FrameService {
    getFrames() {
        return Promise.resolve(FRAMES);
    }
}
