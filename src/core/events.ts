type Events = {
  request: { url: string };
  response: { url: string; status: number };
  error: { error: any };
};

class EventBus {
  private listeners: { [key: string]: Function[] } = {};

  on(event: keyof Events, cb: Function) {
    this.listeners[event] ||= [];
    this.listeners[event].push(cb);
  }

  emit(event: keyof Events, payload: any) {
    this.listeners[event]?.forEach((cb) => cb(payload));
  }
}

export const events = new EventBus();