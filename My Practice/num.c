#include <stdio.h>
#include <stdlib.h>

int main(void)
{
        int num[] = {2, 4, 6, 5, 7, 9, 0};
        for (int i = 0; i < 7; i++){
                if (num[i] == 0) {
                        printf("true");
                }
                else
                {
                        printf("%d\n", num[i]);
                }
        }
        return 0;
}