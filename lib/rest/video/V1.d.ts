/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Version = require('../../base/Version');
import Video = require('../Video');
import { CompositionList } from './v1/composition';
import { CompositionListInstance } from './v1/composition';
import { CompositionSettingsList } from './v1/compositionSettings';
import { CompositionSettingsListInstance } from './v1/compositionSettings';
import { RecordingList } from './v1/recording';
import { RecordingListInstance } from './v1/recording';
import { RecordingSettingsList } from './v1/recordingSettings';
import { RecordingSettingsListInstance } from './v1/recordingSettings';
import { RoomList } from './v1/room';
import { RoomListInstance } from './v1/room';


declare class V1 extends Version {
  /**
   * Initialize the V1 version of Video
   *
   * @property compositionSettings - compositionSettings resource
   * @property recordings - recordings resource
   * @property recordingSettings - recordingSettings resource
   * @property compositions - compositions resource
   * @property rooms - rooms resource
   *
   * @param domain - The twilio domain
   */
  constructor(domain: Video);

  readonly compositionSettings: CompositionSettingsListInstance;
  readonly compositions: CompositionListInstance;
  readonly recordingSettings: RecordingSettingsListInstance;
  readonly recordings: RecordingListInstance;
  readonly rooms: RoomListInstance;
}

export = V1;
