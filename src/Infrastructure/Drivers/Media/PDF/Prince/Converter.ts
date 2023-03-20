// eslint-disable-next-line import/no-extraneous-dependencies
import Prince from 'prince';
import util from 'util';

export class Converter {
  public static html2PDF(): void {
    Prince()
      .inputs('test.html')
      .output('test.pdf')
      .execute()
      .then(() => {
        // eslint-disable-next-line no-console
        console.log('OK: done');
      }, (error) => {
        // eslint-disable-next-line no-console
        console.log('ERROR: ', util.inspect(error));
      });
  }
}
