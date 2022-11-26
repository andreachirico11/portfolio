import Environments from '../environments';

export function log(message: string) {
  if (!Environments.INFO_LOGS_OFF) {
    console.log('\n\n>>>>> I N F O <<<<<\n');
    console.log(message);
    console.log('\n>>>>> ------- <<<<<');
  }
}
