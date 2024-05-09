def are_anagrams(word1, word2):
    # Removing spaces and converting to lowercase for case-insensitive comparison
    word1 = word1.replace(" ", "").lower()
    word2 = word2.replace(" ", "").lower()
    
    # Check if the length of both words are the same
    if len(word1) != len(word2):
        return False
    
    # Counting the frequency of characters in both words
    count1 = {}
    count2 = {}
    
    for char in word1:
        count1[char] = count1.get(char, 0) + 1
        
    for char in word2:
        count2[char] = count2.get(char, 0) + 1
        
    # If the frequency of characters is the same, they are anagrams
    return count1 == count2

# Example usage
word1 = "worth"
word2 = "throw"
print(are_anagrams(word1, word2))  # Output: True
