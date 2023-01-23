solutions to ES6 Basic exercises

0. Modify

        function taskFirst to instantiate variables using const
        function taskNext to instantiate variables using let

1. Given what you’ve read about var and hoisting, modify the variables inside the function taskBlock so that the variables aren’t overwritten inside the conditional block.

                export default function taskBlock(trueOrFalse) {
                        var task = false;
                        var task2 = true;

                        if (trueOrFalse) {
                        var task = true;
                        var task2 = false;
                        }

                return [task, task2];
                }

2. Rewrite the following standard function to use ES6’s arrow syntax of the function add (it will be an anonymous function after)

                export default function getNeighborhoodsList() {
                        this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

                        const self = this;
                        this.addNeighborhood = function add(newNeighborhood) {
                        self.sanFranciscoNeighborhoods.push(newNeighborhood);
                        return self.sanFranciscoNeighborhoods;
                        };
                }
