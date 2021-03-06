// @flow

import { kSampleCodeEmptyTemplate } from './samples/EmptyTemplate';
import { kSampleCodeTestDrawingAPI } from './samples/TestDrawingAPI';
import { kSampleCodeTestMIDIEvents } from './samples/TestMIDIEvents';
import { kSampleCodeSnakeGame } from './samples/SnakeGame';

const kSampleCodes: { [string]: string } = {
  EmptyTemplate: kSampleCodeEmptyTemplate,
  TestDrawingAPI: kSampleCodeTestDrawingAPI,
  TestMIDIEvents: kSampleCodeTestMIDIEvents,
  SnakeGame: kSampleCodeSnakeGame,
};

export class CodeCatalog {
  getCode(codeName: string): ?string {
    if (codeName in kSampleCodes) {
      return kSampleCodes[codeName];
    }
    return null;
  }

  getEmptyTemplate(): string {
    return kSampleCodeEmptyTemplate;
  }

  getCatalog(): Array<string> {
    return Object.keys(kSampleCodes).filter((key) => key !== 'EmptyTemplate');
  }
}

export default CodeCatalog;