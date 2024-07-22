# Its Halloween and all the kids just got home from trick-or-treating.
# we have a list representing how much candy each child in our group has made out with.
# We don’t want the kids to start arguing, and we know trouble is brewing as many of the children
# in the group have received different amounts of candy from each home.
# So we want each child to have the same amount of candies, only we can’t exactly take any candy away from the kids,
# that would be even worse.
# Instead we decide to give each child extra candy until they all have the same amount.
# In the first case the most candies are given to second kid , 8.
# Because of that we will give the first kid 3 so he can have 8
# and the third kid 2
# and the fourth kid 4, so all kids will have 8 candies.
# So we end up handing out 3 + 2 + 4 = 9.
# Examples:
# input: [5,8,6,4]
# output: 9
# input: [1,2,4,6]
# output: 11
# Notes:
# the length of the list of children will always be greater than one

example1 = [5,8,6,4]

# required output 3 + 2 + 4 = 9

def distribute_candy(arr):
    # set a variable to the highest number in the array
    highest_candy = max(arr)
    # create an empty array
    more_candy = []
    # Loop through the original array
    for candies in arr:
        # If the candies that the current kid is different to the highest number of candies
        if candies != highest_candy:
            #  Append to the empty array the difference between the current candy and the highest number of candies
             more_candy.append(highest_candy - candies)
    # Add all of the numbers in the new array and return that  
    return sum(more_candy)

print(distribute_candy(example1))

example1 = [1,2,4,6]

print(distribute_candy(example1))

