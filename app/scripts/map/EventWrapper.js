/**
 * @fileoverview 鐧惧害鍦板浘API浜嬩欢鍖呰鍣�
 * 姝や唬鐮佸彲浣跨敤closure compiler鐨刟dvanced妯″紡杩涜鍘嬬缉
 * @author Baidu Map Api Group 
 * @version 1.2
 */
/** 
 * @namespace BMap鐨勬墍鏈塴ibrary绫诲潎鏀惧湪BMapLib鍛藉悕绌洪棿涓�
 */
window['BMapLib'] = window['BMapLib'] || {};
window['BMapLib']['EventWrapper'] = window['BMapLib']['EventWrapper'] || {};
(function(){
/**
 * 浜嬩欢灏佽鍣ㄧ殑闈欐€佺被
 * @class EventWrapper
 */
var EventWrapper = window['BMapLib']['EventWrapper'];
/**
 * 娣诲姞DOM浜嬩欢鐩戝惉鍑芥暟
 * @param {HTMLElement} DOM鍏冪礌
 * @param {String} 浜嬩欢鍚嶇О
 * @param {Function} 浜嬩欢澶勭悊鍑芥暟
 * @returns {MapsEventListener} 浜嬩欢鐩戝惉瀵硅薄
 */
EventWrapper['addDomListener'] = function(instance, eventName, handler) {
    if (instance.addEventListener) {
        instance.addEventListener(eventName, handler, false);
    }
    else if (instance.attachEvent) {
        instance.attachEvent('on' + eventName, handler);
    }
    else {
        instance['on' + eventName] = handler;
    }
    return new MapsEventListener(instance, eventName, handler, MapsEventListener.DOM_EVENT);
};
/**
 * 娣诲姞DOM浜嬩欢鐩戝惉鍑芥暟锛屽嚱鏁颁粎鎵ц涓€娆�
 * @param {HTMLElement} DOM鍏冪礌
 * @param {String} 浜嬩欢鍚嶇О
 * @param {Function} 浜嬩欢澶勭悊鍑芥暟
 * @returns {MapsEventListener} 浜嬩欢鐩戝惉瀵硅薄
 */
EventWrapper['addDomListenerOnce'] = function(instance, eventName, handler) {
    var eventListener = EventWrapper['addDomListener'](instance, eventName, function(){
        // 绉婚櫎
        EventWrapper['removeListener'](eventListener);
        return handler.apply(this, arguments);
    });
    return eventListener;
};
/**
 * 娣诲姞鍦板浘浜嬩欢鐩戝惉鍑芥暟
 * @param {Object} 瀹炰緥
 * @param {String} 浜嬩欢鍚嶇О
 * @param {Function} 浜嬩欢澶勭悊鍑芥暟
 * @returns {MapsEventListener} 浜嬩欢鐩戝惉瀵硅薄
 */
EventWrapper['addListener'] = function(instance, eventName, handler) {
    instance.addEventListener(eventName, handler);
    return new MapsEventListener(instance, eventName, handler, MapsEventListener.MAP_EVENT);
};
/**
 * 娣诲姞鍦板浘浜嬩欢鐩戝惉鍑芥暟锛屽嚱鏁颁粎鎵ц涓€娆�
 * @param {Object} 闇€瑕佺洃鍚殑瀹炰緥
 * @param {String} 浜嬩欢鍚嶇О
 * @param {Function} 浜嬩欢澶勭悊鍑芥暟
 * @returns {MapsEventListener} 浜嬩欢鐩戝惉瀵硅薄
 */
EventWrapper['addListenerOnce'] = function(instance, eventName, handler){
    var eventListener = EventWrapper['addListener'](instance, eventName, function(){
        // 绉婚櫎
        EventWrapper['removeListener'](eventListener);
        return handler.apply(this, arguments);
    });
    return eventListener;
};
/**
 * 绉婚櫎鐗瑰畾瀹炰緥鐨勬墍鏈変簨浠剁殑鎵€鏈夌洃鍚嚱鏁�
 * @param {Object} 闇€瑕佺Щ闄ゆ墍鏈変簨浠剁洃鍚殑瀹炰緥
 * @returns {None}
 */
EventWrapper['clearInstanceListeners'] = function(instance) {
    var listeners = instance._e_ || {};
    for (var i in listeners) {
        EventWrapper['removeListener'](listeners[i]);
    }
    instance._e_ = {};
};
/**
 * 绉婚櫎鐗瑰畾瀹炰緥鐗瑰畾浜嬩欢鐨勬墍鏈夌洃鍚嚱鏁�
 * @param {Object} 闇€瑕佺Щ闄ょ壒瀹氫簨浠剁洃鍚殑瀹炰緥
 * @param {String} 闇€瑕佺Щ闄ょ殑浜嬩欢鍚�
 * @returns {None}
 */
EventWrapper['clearListeners'] = function(instance, eventName) {
    var listeners = instance._e_ || {};
    for (var i in listeners) {
        if (listeners[i]._eventName == eventName) {
            EventWrapper['removeListener'](listeners[i]);
        }
    }
};
/**
 * 绉婚櫎鐗瑰畾鐨勪簨浠剁洃鍚嚱鏁�
 * @param {MapsEventListener} 闇€瑕佺Щ闄ょ殑浜嬩欢鐩戝惉瀵硅薄
 * @returns {None}
 */
EventWrapper['removeListener'] = function(listener) {
    var instance = listener._instance;
    var eventName = listener._eventName;
    var handler = listener._handler;
    var listeners = instance._e_ || {};
    for (var i in listeners) {
        if (listeners[i]._guid == listener._guid) {
            if (listener._eventType == MapsEventListener.DOM_EVENT) {
                // DOM浜嬩欢
                if (instance.removeEventListener) {
                    instance.removeEventListener(eventName, handler, false);
                }
                else if (instance.detachEvent) {
                    instance.detachEvent('on' + eventName, handler);
                }
                else {
                    instance['on' + eventName] = null;
                }
            }
            else if (listener._eventType == MapsEventListener.MAP_EVENT) {
                // 鍦板浘浜嬩欢
                instance.removeEventListener(eventName, handler);
            }
            delete listeners[i];
        }
    }
};
/**
 * 瑙﹀彂鐗瑰畾浜嬩欢
 * @param {Object} 瑙﹀彂浜嬩欢鐨勫疄渚嬪璞�
 * @param {String} 瑙﹀彂浜嬩欢鐨勫悕绉�
 * @param {Object} 鑷畾涔変簨浠跺弬鏁帮紝鍙€�
 * @returns {None}
 */
EventWrapper['trigger'] = function(instance, eventName) {
    var listeners = instance._e_ || {};
    for (var i in listeners) {
        if (listeners[i]._eventName == eventName) {
            var args = Array.prototype.slice.call(arguments, 2);
            listeners[i]._handler.apply(instance, args);
        }
    }
};

/**
 * 浜嬩欢鐩戝惉绫�
 * @constructor
 * @ignore
 * @private
 * @param {Object} 瀵硅薄瀹炰緥
 * @param {string} 浜嬩欢鍚嶇О
 * @param {Function} 浜嬩欢鐩戝惉鍑芥暟
 * @param {EventTypes} 浜嬩欢绫诲瀷
 */
function MapsEventListener(instance, eventName, handler, eventType){
    this._instance = instance;
    this._eventName = eventName;
    this._handler = handler;
    this._eventType = eventType;
    this._guid = MapsEventListener._guid ++;
    this._instance._e_ = this._instance._e_ || {};
    this._instance._e_[this._guid] = this;
}
MapsEventListener._guid = 1;

MapsEventListener.DOM_EVENT = 1;
MapsEventListener.MAP_EVENT = 2;

})();