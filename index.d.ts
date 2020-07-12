declare module "react-native-simple-logger" {
  export interface logger {
    /**
     * To log any data in the console
     * @param header - The header to be shown as heading of the output.
     * @param text - The output to be shown.
     * @param expandJson - Whether to expand the JSON object or not.
     */
    log(header?: string, text?: any, expandJson?: boolean): void;

    /**
     * To log any data in the console
     * @param header - The header to be shown as heading of the output.
     * @param text - The output to be shown.
     * @param noJsonExpand - Whether to expand the JSON object or not.
     */
    data(header?: string, text?: any, noJsonExpand?: boolean): void;

    /**
     * To log any data in the console
     * @param header - The header to be shown as heading of the error output.
     * @param err - The error to be shown.
     * @param expandJson - Whether to expand the JSON object or not.
     */
    error(header?: string, err?: any, expandJson?: boolean): void;

    /**
     * To log any data in the console
     * @param header - The header to be shown as heading of the error output.
     * @param err - The error to be shown.
     */
    apiError(header?: string, err?: any): void;
  }

  const logger: logger;

  export default logger;
}
