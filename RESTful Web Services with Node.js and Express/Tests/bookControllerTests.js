var should = require("should"),
    sinon = require("sinon");

describe('Book ctrl tests:', function () {
    describe('Post', function () {
        it('should not allow an empty title on post', function () {
            var Book = function (book) {
                this.save = function () {
                };
            };

            var req = {
                body: {
                    author: 'John'
                }
            };

            var res = {
                status: sinon.spy(),
                send: sinon.spy()
            };

            var bookController = require('../Controllers/bookController')(Book);
            bookController.post(req, res);

            // check methods
            res.status.calledWith(400).should.equal(true, 'Bad status');
            res.send.calledWith('Title is required').should.equal(true);
        });
    });
});