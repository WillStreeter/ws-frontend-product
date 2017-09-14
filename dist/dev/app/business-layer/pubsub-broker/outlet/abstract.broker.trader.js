"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractBrokerTrader = (function () {
    function AbstractBrokerTrader() {
        this._consumers = [];
    }
    AbstractBrokerTrader.prototype.RegisterBrokerConsumer = function (consumer) {
        this._consumers.push(consumer);
    };
    AbstractBrokerTrader.prototype.RemoveBrokerConsumer = function (consumer) {
        var i = this._consumers.length;
        while (i--) {
            if (this._consumers[i] === consumer) {
                this._consumers.splice(i, 1);
            }
        }
    };
    return AbstractBrokerTrader;
}());
exports.AbstractBrokerTrader = AbstractBrokerTrader;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9idXNpbmVzcy1sYXllci9wdWJzdWItYnJva2VyL291dGxldC9hYnN0cmFjdC5icm9rZXIudHJhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBT0E7SUFNSTtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFVTSxxREFBc0IsR0FBN0IsVUFBOEIsUUFBbUI7UUFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUdNLG1EQUFvQixHQUEzQixVQUE0QixRQUFrQjtRQUMxQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUUvQixPQUFPLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDVCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNqQyxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFDTCwyQkFBQztBQUFELENBaENBLEFBZ0NDLElBQUE7QUFoQ3FCLG9EQUFvQiIsImZpbGUiOiJhcHAvYnVzaW5lc3MtbGF5ZXIvcHVic3ViLWJyb2tlci9vdXRsZXQvYWJzdHJhY3QuYnJva2VyLnRyYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gQWJzdHJhY3QgY2xhc3NlcyBjYW1lIGludG8gdGhlIGxhbmd1YWdlIHdpdGggdjEuNiBhcm91bmQgMTAvMjAxNVxuaW1wb3J0IHsgSVN1cHBsaWVyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9JU3VwcGxpZXInO1xuaW1wb3J0IHsgSUNvbnN1bWVyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9JQ29uc3VtZXInO1xuaW1wb3J0IHsgQnJva2VyQWN0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL2Jyb2tlci5hY3Rpb24ubW9kZWwnO1xuaW1wb3J0IHsgQnJva2VyUmVzcG9uc2UgfSBmcm9tICcuLi9tb2RlbHMvYnJva2VyLnJlc3BvbnNlLm1vZGVsJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0QnJva2VyVHJhZGVyIGltcGxlbWVudHMgSVN1cHBsaWVye1xuXG4gICAgLy8gQW4gYXJyYXkgb2YgSU9ic2VydmVycy4gUmVnaXN0ZXIsIFJlbW92ZSBhbmQgTm90aWZ5IGRyaXZlIG9mZiB0aGlzLlxuICAgIC8vIFRoaXMgaGFzIHRvIGJlIHByb3RlY3RlZCBiZWNhdXNlIHRoZSBzdWItY2xhc3NlcyBuZWVkIGFjY2VzcyB0byBpdC5cbiAgICBwcm90ZWN0ZWQgX2NvbnN1bWVyczogSUNvbnN1bWVyW107XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fY29uc3VtZXJzID0gW107XG4gICAgfVxuXG4gICAgLy8gVGhpcyBtdXN0IGJlIGltcGxlbWVudGVkIGJ5IGFueSBzdWJjbGFzc2VzLlxuICAgIHB1YmxpYyBhYnN0cmFjdCBOb3RpZnlCcm9rZXJBY3Rpb25Db25zdW1lcnMoYnJva2VyQWN0aW9uOkJyb2tlckFjdGlvbik7XG5cbiAgICBwdWJsaWMgYWJzdHJhY3QgTm90aWZ5QnJva2VyU2VsZWN0b3JDb25zdW1lcihicm9rZXJUeXBlOnN0cmluZyk6QnJva2VyUmVzcG9uc2U7XG5cbiAgICAvLyBUaGUgUmVnaXN0ZXJCcm9rZGVyQ29uc3VtZXIgYW5kIFJlbW92ZUNvbnN1bWVyIGFyZSBmdWxseSBpbXBsZW1lbnRlZC5cblxuICAgIC8vIE9uY2UgcmVnaXN0ZXJlZCwgdGhlIGNvbnN1bWVyIHdpbGwgYmUgbm90aWZpZWQgb2YgYW55IGNoYW5nZXMgaW4gc3RhdGUuXG4gICAgcHVibGljIFJlZ2lzdGVyQnJva2VyQ29uc3VtZXIoY29uc3VtZXI6IElDb25zdW1lcik6IHZvaWQge1xuICAgICAgICB0aGlzLl9jb25zdW1lcnMucHVzaChjb25zdW1lcik7XG4gICAgfVxuXG4gICAgLy8gR2l2ZSB0aGUgY29uc3VtZXIgYSB3YXkgdG8gZGUtcmVnaXN0ZXJcbiAgICBwdWJsaWMgUmVtb3ZlQnJva2VyQ29uc3VtZXIoY29uc3VtZXI6SUNvbnN1bWVyKTogdm9pZCB7XG4gICAgICAgIGxldCBpID0gdGhpcy5fY29uc3VtZXJzLmxlbmd0aDtcblxuICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fY29uc3VtZXJzW2ldID09PSBjb25zdW1lcikge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbnN1bWVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9IC8vIGlmIHdlIGZvdW5kIGl0LlxuICAgICAgICB9XG4gICAgfVxufVxuXG4iXX0=
