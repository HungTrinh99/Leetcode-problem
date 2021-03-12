#include <string>
using namespace std;

class Solution
{
public:
    string addStrings(string num1, string num2)
    {
        int i = num1.length() - 1;
        int j = num2.length() - 1;
        int reminder = 0;
        string total;

        while (i >= 0 && j >= 0)
        {
            int sum = (num1[i] - '0') + (num2[j] - '0') + reminder;
            char c = (sum % 10) + '0';
            reminder = sum / 10;
            total += c;
            i--;
            j--;
        }

        while (i >= 0)
        {
            int sum = (num1[i] - '0') + reminder;
            char c = (sum % 10) + '0';
            reminder = sum / 10;
            total += c;
            i--;
        }

        while (j >= 0)
        {
            int sum = (num2[j] - '0') + reminder;
            char c = (sum % 10) + '0';
            reminder = sum / 10;
            total += c;
            j--;
        }
        if (reminder == 1)
            total += "1";
        reverse(total.begin(), total.end());
        return total;
    }
};