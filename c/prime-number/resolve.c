#include<stdio.h>
//judge the number whether prime
int judge(num){
	int i;
	char sign;
	for(i=2;i<num;i++){
		if(num%i==0){
			sign=1;//not prime
			break;
		}
	}
	if(i>=num){
		sign=2;//prime
	}
	return sign;
}

void main(){
	int a,i;
	printf("Factorization\n");
	printf("Please input a number: ");
	scanf("%d",&a);
	switch(judge(a)){
		case 1:
			for(i=2;i<a;i++){
				if(a%i==0){
					printf("%d  ",i);
				}
			}
			break;
		case 2:
			printf("%d is a prime number",a);
			break;
	}
} 
