import { Observable } from 'rxjs/Observable';
import io from 'socket.io-client';
import wildcard from 'socketio-wildcard';
import { randomString } from '../utils/misc';

class SocketObservable {

  constructor(url, actions, options = {}) {
    const self = this;
    try {
      self.socket = io(url, options);
      self.actions = actions;
      wildcard(io.Manager)(self.socket);
    }
    catch (e) { throw e; }
  }

  // unparse - return type
  static getType(eventObj) {
    if (!eventObj || !eventObj.type) { return null; }
    return eventObj.type;
  }

  // unparse - return data
  static getData(eventObj) {
    if (!eventObj || !eventObj.data) { return null; }
    return eventObj.data;
  }

  // parse response before passing through observable
  parse(type, data) {
    const id = data ? data.id : null;
    return { type, data, id };
  }

  send(type, data) {
    const self = this;
    // Server is provided with an event id on every request and
    // it will attach the event id while responding, so UI can
    // know when a response to a particular request has arrived
    const id = randomString();

    self.socket.emit(type, { data, id });
    return id;
  }

  observable() {
    const self = this;
    return Observable.create(observer => {

      self.socket.on('message', event => {
        observer.next(self.parse('message', event));
      })

      self.socket.on('connect', event => {
        self.actions.socketConnection();
        observer.next(self.parse('connect'));
      })

      self.socket.on('connect_error', event => {
        self.actions.socketConnectionError();
        observer.next(self.parse('connect_error'));
      })

      self.socket.on('connect_timeout', event => {
        self.actions.socketConnectionTimeout();
        observer.next(self.parse('connect_timeout'));
      })

      self.socket.on('disconnect', event => {
        self.actions.socketDisconnected();
        observer.next(self.parse('disconnect'));
      })

      self.socket.on('reconnect', event => {
        self.actions.socketReconnection();
        observer.next(self.parse('reconnect'));
      })

      self.socket.on('reconnecting', event => {
        self.actions.socketReconnecting();
        observer.next(self.parse('reconnecting'));
      })

      self.socket.on('reconnect_error', event => {
        self.actions.socketReconnectionFailed();
        observer.next(self.parse('reconnect_error'));
      })

      self.socket.on('reconnect_failed', event => {
        self.actions.socketReconnectionFailed();
        observer.next(self.parse('reconnect_failed'));
      })

      self.socket.on('*', res => {
        try {
          const [type, event] = res.data;
          observer.next(self.parse(type, event));
        } catch (e) {
          /* do nothing */
        }
      })

    })
  }

  close() {
    this.socket.close();
  }
}

export default SocketObservable;
