export class ApiError extends Error {
  constructor(
    message: string,
    public source?: string,
    public cause?: any
  ) {
    super(message);
  }

  static wrap(err: any, source: string) {
    return new ApiError(err?.message || "Unknown error", source, err);
  }
}